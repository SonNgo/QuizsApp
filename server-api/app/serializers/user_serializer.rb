class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :description, :point, :auth_token
end
