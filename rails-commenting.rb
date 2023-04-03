# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Below is a class called BlogPostsController that contains multiple methods within it. It is taking in the same methods and instances that the superclass ApplicationController has.
class BlogPostsController < ApplicationController
  def index
    # ---2) Below, we are creating an instance variable called @posts that is set to BlogPost.all. BlogPost.all in the console will show all of the instances of the blog posts created. Calling on @posts will show all of these instances. 
    @posts = BlogPost.all
  end

  # ---3) Below is a method called show that has an instance variable (@post) set to find a particular BlogPost by it's id. This will display one instance of the BlogPost depending on what id is taken in as the argument since .find() requires params to be inputted.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Below is a method called new that has an instance variable set to display a form. New uses the HTTP verb of GET and is a "read" CRUD action.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Below we are creating an instance variable that is set to create a new BlogPost. .create takes in the strong parameters that requires certain attributes in order to be valid to create a post. Below that is a code block that determines if the post is valid, and if it is, it redirects to the blog post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Below we are creating an instance variable that is set to find a particular BlogPost by it's id. But since this is the edit method, this will be displaying a form with the intention of being able to edit it.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Below is the code that will allow us to update the existing blog post based on the strong parameter requirements. And below that, if the edits are valid, then it redirects to the blog post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Below is the code that will redirect the user to show all the instances of the blog posts after the user deletes a particular blog post. 
      redirect_to blog_posts_path
    end
  end

  # ---9) Below is the code private which only allows us to access the method here and no where else in our application. Only strong params are placed under private. All other methods should be placed above private.
  private
  def blog_post_params
    # ---10) Below is the code that will require the title and content parameters for the BlogPost model.
    params.require(:blog_post).permit(:title, :content)
  end
end
