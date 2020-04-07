note
	description: "minmax application root class"
	date: "$Date$"
	revision: "$Revision$"

class
	APPLICATION

inherit
	ARGUMENTS_32

create
	make

feature {NONE} -- Initialization

	make
			-- Run application.
		local
			l_array: ARRAY [INTEGER]
		do
			comparisons := 0
			l_array := array_of_n (256)
			l_array.do_all (agent do_print)
			print ("%N")
			print (minmax_divide_and_conquer (l_array))
			print ("%NComparisons:" + comparisons.out)
			print ("%N")
			comparisons := 0
			print (minmax (l_array))
			print ("%NComparisons:" + comparisons.out)

		end


	minmax (a: ARRAY [INTEGER]): TUPLE [min: INTEGER; max: INTEGER]
				-- MinMax Ira Pohl
		require
			not_empty: a.count > 0
		local
			i: INTEGER
			first: BOOLEAN
		do
				-- Array with even number of elements.
			if a.count \\ 2 = 0 then
					-- Initialize min and max
				comparisons := comparisons + 2
				if a [a.lower] > a [a.lower + 1] then
					Result := [a[a.lower], a[a.lower + 1]]
				else
					Result := [a[a.lower + 1], a[a.lower]]
				end
				i := a.lower + 2
			else
				-- Array with odd number of elements.
				Result := [a[a.lower], a[a.lower]]
				i := a.lower + 1
				comparisons := comparisons + 1
			end

				-- Loop.
			from
			until
				i >= a.upper - 1
			loop
				if a [i] > a[i + 1] then
					if a [i] > Result.max then
						Result.max := a[i]
					end
					if a [i + 1] < Result.min  then
						Result.min := a [i + 1]
					end
					comparisons := comparisons + 3
				else
					if a [i + 1] > Result.max then
						Result.max := a [i + 1]
					end
					if a[i] < Result.min then
						Result.min := a [i]
					end
					comparisons := comparisons + 3
				end
				i := i + 2
				first := False
			end

		end

	minmax_divide_and_conquer (a: ARRAY [INTEGER]): TUPLE [min: INTEGER; max: INTEGER]
		require
			valid_size: a.count >= 1
		local
			n: INTEGER
			r1: TUPLE [min: INTEGER; max: INTEGER]
			r2: TUPLE [min: INTEGER; max: INTEGER]
		do
			if a.count = 1 then
				Result := [a[a.lower], a [a.lower]]
			elseif a.count = 2 then
				comparisons := comparisons + 1
				if a[a.lower] > a [a.lower + 1] then
					Result := [a[a.lower + 1], a [a.lower]]
				else
					Result := [a[a.lower], a [a.lower + 1]]
				end
			else
				Result := [0,0]
				n := a.count // 2
				r1 := minmax_divide_and_conquer (a.subarray (a.lower, a.lower + n - 1))
				r2 := minmax_divide_and_conquer (a.subarray (a.lower + n , a.upper))
				if r1.min > r2.min then
					Result.min := r2.min
				else
					Result.min := r1.min
				end
				if r1.max > r2.max then
					Result.max := r1.max
				else
					Result.max := r2.max
				end
				comparisons := comparisons + 2
			end
		end

	do_print (a: INTEGER)
		do
			print (" ")
			print (a)
			print (" ")
		end

	array_of_n (n: INTEGER): ARRAY [INTEGER]
			-- Generate a random array of n elements.
		require
			at_least_1: n >= 1
		local
			random: RANDOM
		do
			create random.make
			random.start
			create Result.make_filled (0, 1, n)
			across 1 |..| n  as ic loop
				random.forth
				Result [ic.item] := (random.item \\ 500) + 1
			end
		end

	comparisons: INTEGER
			-- Number of comparision.

end
