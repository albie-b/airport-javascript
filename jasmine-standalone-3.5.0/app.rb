require 'sinatra/base'

class AirportChallenge < Sinatra::Base
  set :static, true
  set :public_folder, Proc.new { File.join(root, "airportinterface") }

  get '/' do
    File.read('./views/index.html')
  end
end
