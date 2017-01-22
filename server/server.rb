require 'sinatra'

set :port, 4568

get '/' do
  'YouTube downloader proxy is running :]'
end

get '/frank-says' do
  'Put this in your pipe & smoke it!'
end

get '/youtube-dl/:id' do
  `youtube-dl -o '~/Desktop/%(title)s.%(ext)s' --add-metadata -x --audio-format mp3 'https://www.youtube.com/watch?v=#{params[:id]}'`
end

