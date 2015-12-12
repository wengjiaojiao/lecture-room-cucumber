require 'capybara'
require 'capybara/cucumber'

Capybara.register_driver :selenium do |app|
	Capybara::Selenium::Driver.new(app, {browser: :chrome});
end

Capybara.default_driver = :selenium
Capybara.app_host = 'http://wengjiaojiao.github.io/lecture-room-cucumber/views/'
