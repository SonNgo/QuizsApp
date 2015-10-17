class ApplicationController < ActionController::API
  before_action :setHeader


  include Authenticable


  def setHeader
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'      
  end

  def default_serializer_options
    { root: false }
  end

end
