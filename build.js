const acorn = require("acorn")
// const walk = require("acorn-walk")
const fetch = require("node-fetch");
const fs = require('fs');


const user_def = 'fpelliccioni';
const repo_def = 'algorithm_course';

// curl -i https://api.github.com/repos/fpelliccioni/algorithm_course/contents/catalog/

var catalog = {};

function algorithm_name(filename) {
    return filename.split('.').slice(0, -1).join('.');
}

function function_content(code, start, end) {
    return code.substring(start, end);
}

function function_extras_rename(code, old_name, new_name) {
    return code.replace(old_name, new_name);
}

function function_params_list(code, node) {
    var params = [];
    for(var k in node.params) {
        // console.log(k, node.params[k].name);
        params.push(node.params[k].name)
    }
    return params.join(", ");
}

function function_make_debuggable(code, node) {
    // return code.replace(old_name, new_name);

    const func_code = function_content(code, node.start, node.end);
    // console.log(code);
    // console.log(node);
    const params = function_params_list(code, node);
    // console.log(params);

    const old_name = node.id.name;
    const new_name = `__debug_${old_name}`;
    const ren_code = function_extras_rename(func_code, old_name, new_name);

    const new_func_code = `function ${old_name}(${params}) {
    var _f_ = start_f('${old_name}', ${params});
    var res = ${new_name}(${params});
    end_f(_f_);
    return res;
}`;
    
    return ren_code + '\n\n' + new_func_code;
}

function path_to_catalog(path, name) {
    path = path.replace(`/${name}`, '');
    return path.replace('catalog/', '');
}

function html_url(path) {
    return 'https://github.com/fpelliccioni/algorithm_course/blob/master/' + path;
}

function process_file(path, filename) {

    var file_content_main = '';
    var file_content_debug = '';
    var file_content_extra = '';


    const algo_name = algorithm_name(filename)
    const code = fs.readFileSync(path, 'utf8');
    // console.log(code)
    
    var p = acorn.parse(code);
    // console.log(p);
    // console.log(p.body);

    for (var n in p.body) {
        // console.log(n, p.body[n]);
        const value = p.body[n];
        if (value.type == 'FunctionDeclaration') {
            // console.log(value.id.name);
            // console.log(value.start);
            // console.log(value.end);
            // console.log(function_content(code, value.start, value.end));
            const func_code = function_content(code, value.start, value.end);
            if (value.id.name == algo_name) {
                catalog[algo_name] = [path_to_catalog(path, filename), html_url(path)];
                file_content_main += func_code;
                file_content_main += '\n\n';
                file_content_debug += function_make_debuggable(code, value);
                file_content_debug += '\n\n';
            } else if (value.id.name == 'usage'|| value.id.name == 'attributes') {
                const new_name = `__${algo_name}_${value.id.name}`;
                const ren_code = function_extras_rename(func_code, value.id.name, new_name);
                file_content_extra += ren_code;
                file_content_extra += '\n\n';
            } else {
                console.log(`warning: ignoring function ${value.id.name} in ${path}`);
            }
        } else {
            console.log(value);
        }
    }
    return [file_content_main, file_content_debug, file_content_extra];
}

function process_dir(path) {

    var file_content_main = '';
    var file_content_debug = '';
    var file_content_extra = '';

    fs.readdirSync(path).forEach(function(f) {

        var file = path + '/' + f;
        var stat = fs.statSync(file);
    
        if (stat && stat.isDirectory()) {
            var res = process_dir(file);
        } else {
            var res = process_file(file, f);
        }

        file_content_main  += res[0];
        file_content_debug += res[1];
        file_content_extra += res[2];
    });
    return [file_content_main, file_content_debug, file_content_extra];
}



function process_file_helpers(path, filename) {
    var file_content_debug = '';
    const algo_name = algorithm_name(filename)
    const code = fs.readFileSync(path, 'utf8');
    return code;
}

function process_dir_helpers(path) {

    var file_content_debug = '';

    fs.readdirSync(path).forEach(function(f) {

        var file = path + '/' + f;
        var stat = fs.statSync(file);
    
        if (stat && stat.isDirectory()) {
            var res = process_dir_helpers(file);
        } else {
            var res = process_file_helpers(file, f);
        }

        file_content_debug += res;
    });
    return file_content_debug;
}


async function main(user, repo) {  
    fs.mkdir('./build/', { recursive: true }, (err) => {
        if (err) throw err;
    });
    
    var res = process_dir('catalog');
    var res_helpers = process_dir_helpers('helpers');

    // console.log(catalog);
    var catalog_str = 'function __catalog() {\nreturn {'
    for (var ck in catalog) {
        catalog_str += `${ck}: [ '${catalog[ck][0]}', '${catalog[ck][1]}' ],\n`;
    }
    catalog_str += '};}\n\n';
    // console.log(catalog_str);


    fs.writeFile("./build/algorithms.js", res[0], function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("./build/algorithms.js was saved!");
    }); 

    fs.writeFile("./build/algorithms_debug.js", res[1] + '\n\n' + res_helpers, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("./build/algorithms_debug.js was saved!");
    }); 

    fs.writeFile("./build/algorithms_extra.js", catalog_str + res[2], function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("./build/algorithms_extra.js was saved!");
    }); 

}

(async () => {
    try {
        var text = await main(user_def, repo_def);
        // console.log(text);
    } catch (e) {
        console.log(e);
        // Deal with the fact the chain failed
    }
})();

// ---------------------------------------------------------------
// Take from Github
// ---------------------------------------------------------------

// async function process_file(dir, k) {

//     var file_content_main = '';
//     var file_content_debug = '';
//     var file_content_extra = '';

//     console.log(k, dir[k]);

//     const filename = dir[k].name;
//     const algo_name = algorithm_name(filename)

//     const response = await fetch(dir[k].download_url);
//     const code = await response.text();
//     // console.log(code)
    
//     var p = acorn.parse(code);
//     // console.log(p);
//     // console.log(p.body);

//     for (var n in p.body) {
//         // console.log(n, p.body[n]);
//         const value = p.body[n];
//         if (value.type == 'FunctionDeclaration') {
//             // console.log(value.id.name);
//             // console.log(value.start);
//             // console.log(value.end);
//             // console.log(function_content(code, value.start, value.end));
//             const func_code = function_content(code, value.start, value.end);
//             if (value.id.name == algo_name) {
//                 catalog[algo_name] = [path_to_catalog(dir[k].path), dir[k].html_url];
//                 file_content_main += func_code;
//                 file_content_main += '\n\n';
//                 file_content_debug += function_make_debuggable(code, value);
//                 file_content_debug += '\n\n';
//             } else if (value.id.name == 'usage'|| value.id.name == 'attributes') {
//                 const new_name = `__${algo_name}_${value.id.name}`;
//                 const ren_code = function_extras_rename(func_code, value.id.name, new_name);
//                 file_content_extra += ren_code;
//                 file_content_extra += '\n\n';
//             } else {
//                 console.log(`warning: ignoring function ${value.id.name} in ${dir[k].download_url}`);
//             }
//         } else {
//             console.log(value);
//         }
//     }
//     return [file_content_main, file_content_debug, file_content_extra];
// }

// async function process_dir(user, repo, path) {
//     const response = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}`);
//     const dir = await response.json();
//     // console.log(JSON.stringify(myJson));

//     var file_content_main = '';
//     var file_content_debug = '';
//     var file_content_extra = '';

//     for(var k in dir) {
//         // console.log(k, dir[k]);
//         // console.log(dir[k].name);
//         // console.log(algorithm_name(dir[k].name));
//         // console.log(dir[k].download_url);
//         // console.log(dir[k].html_url);

//         if (dir[k].type == 'dir') {
//             var res = await process_dir(user, repo, dir[k].path);
//         } else {
//             var res = await process_file(dir, k);
//         }

//         file_content_main  += res[0];
//         file_content_debug += res[1];
//         file_content_extra += res[2];
//     }
//     return [file_content_main, file_content_debug, file_content_extra];
// }
