Given(/^Search "([^"]*)"$/) do |search_contnet|
	fill_in 'search-frame', with: search_contnet
	sleep 1
end

Given(/^Have (\d+) result$/) do |expect|
	sleep 1
	result = all('tbody');
	sleep 1
	expect(result.length).to eq expect.to_i
end
