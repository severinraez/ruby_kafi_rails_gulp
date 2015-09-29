class Api::FoosController < ApplicationController
  respond_to :json
  def index
    respond_with({ foo: 'bar' })
  end
end
