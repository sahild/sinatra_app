require 'rubygems'
require 'sinatra'
require "sinatra/config_file"
config_file 'config.yml'
get '/' do
  @properties=settings.properties
  erb :home
end