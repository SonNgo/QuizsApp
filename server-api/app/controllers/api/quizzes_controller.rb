class Api::QuizzesController < ApplicationController
  before_action :current_subject

  def index
    @quizzes = @current_subject.quizzes

    render json: @quizzes
  end


private 
  def current_subject
    
    @current_subject = Subject.find(params[:subject_id])

  end

  def quiz_params
    params.require(:quiz).permit(:name)
  end


end