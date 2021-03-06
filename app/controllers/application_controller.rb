class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :set_locale
  
  private

    def authorize
      redirect_to root_url if current_user.nil?
    end
  
  	def set_locale
  	  I18n.locale = params[:locale] if params[:locale].present?
  	end
  	
  	def default_url_options(options = {})
  	  {locale: I18n.locale}
  	end

    def current_user
      @current_user = User.find(session[:user_id]) if session[:user_id]
    end

    helper_method :current_user

    def get_programming_languages
      @programming_languages ||= ProgrammingLanguage.order(:name).map do |p|
        [p.name, p.id]
      end
    end
    
    helper_method :get_programming_languages

    def get_salaries
      @salaries ||= Salary.order(:order_id).map do |s|
        [s.amount, s.id]
      end
    end

    helper_method :get_salaries
  
    def get_orientations
      @orientations ||= Orientation.order(:name).map do |s|
        [s.name, s.id]
      end
    end

    helper_method :get_orientations

end
