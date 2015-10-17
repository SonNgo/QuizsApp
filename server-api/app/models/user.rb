class User < ActiveRecord::Base
  before_save -> { self.email = email.downcase }
  before_create -> { self.auth_token = SecureRandom.hex }
  validates :name,  presence: true, length: { maximum: 50 }
end
