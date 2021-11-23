class HomeController < ApplicationController
  def index
    @tiktok_objects = Home::OBJECTS
  end
end
