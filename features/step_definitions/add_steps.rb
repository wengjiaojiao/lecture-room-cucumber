Given(/^Open the homepage$/) do
	# puts "start"
	visit '/'
	sleep 1
end

Given(/^Click the add button$/) do
	click_on 'add'
	sleep 1
end

Given(/^Input "([^"]*)" and "([^"]*)"$/) do |name, address|
	fill_in 'name', with: name
	fill_in 'address', with: address
	sleep 1
end
