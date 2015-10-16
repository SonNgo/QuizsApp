require 'test_helper'

class SubjectsControllerTest < ActionController::TestCase
  setup do
    @subject = subjects(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:subjects)
  end

  test "should create subject" do
    assert_difference('Subject.count') do
      post :create, subject: { title: @subject.title }
    end

    assert_response 201
  end

  test "should show subject" do
    get :show, id: @subject
    assert_response :success
  end

  test "should update subject" do
    put :update, id: @subject, subject: { title: @subject.title }
    assert_response 204
  end

  test "should destroy subject" do
    assert_difference('Subject.count', -1) do
      delete :destroy, id: @subject
    end

    assert_response 204
  end
end
