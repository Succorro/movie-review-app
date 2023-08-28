class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    rescue_from  ::ActiveRecord::RecordNotFound do |exception| 
        render json: {error: "#{exception.message}"}, status: :not_found
    end

    rescue_from ::ActiveRecord::RecordInvalid do |exception| 
        render json: {errors: "#{exception.message}"}, status: :unprocessable_entity
    end

    def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end
end
