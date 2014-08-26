
class PostsController < ApplicationController

	before_action :set_post, only: [:show, :update, :destroy]

	def index
		render json: Post.all, status: 200
	end

	def show
		render json: $post.to_json, status: 200
	end

	def create
		@post = Post.new(post_params)
		if @post.save
			render json: @post.to_json, status: 200
		end
	end

	def update
		render json: @post.to_json, status: 200 if @post.update(post_params)
	end

	def destroy
		render json: @post.to_json if @post.destroy
	end

	private

  def set_post
    @post = Post.find(params[:id])
  end
  def post_params
    params.require(:post).permit(:author,:content,:title)
  end
end