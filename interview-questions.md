# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: If we are creating a Rails application with a model called Cohort that has_many students, the name of the foreign key would be cohort_id. The foreign key woud be on the Student model. 

Researched answer: If we are creating a Rails application with a model called Cohort that has_many students, the name of the foreign key would be cohort_id placed on the Student model because we'll want to connect the students with their particular cohort. If we forgot to add the foreign key when creating the Student model, in the Student model, we can generate a migration to edit the database. 
- First, we will run the migration command: rails g migration add_columns_to_list (this is generate a new file in the migrate directory with the timestamp)
- In that file, within the def change method, we will tell it to add a new column in our table: add_column :students, :cohort_id, :integer
- Then we save the file and migrate the changes with the command: rails db:migrate


2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that must always be passed params are show (we need to pass the id params to be able to show a specific instance), edit (we need to pass the id params to be able to edit a specific instance), create (we need to pass strong params to ensure we are passing in valid information), update (we need to pass strong params to ensure we are passing in valid information), delete (we need to pass the id params to be able to delete a specific instance)

Researched answer: The RESTful routes that must always be passed params are the following:
- show: this is a GET request that needs to be passed id params in order to see a specific instance
- destroy: this is a DELETE request that needs to be passed id params in oder to delete a specific instance
- create: in the method, we need to pass strong params to ensure we are only taking in valid information to create an instance
- edit: this is a GET request that needs to be passed id params in order to edit a specific instane
- update: in the method, we need to pass strong params to ensure we are only taking in valid information to update an instance


3. Name three rails generator commands. What is created by each?

Your answer:
 - rails g model ModelName attribute:datatye - this creates a Model with the necessary attributes
 - rails g controller - this creates a controller file where we would pass in methods and logic for the app
 - rails g resource - don't remember what this creates exactly but I do remember that it's set up very similarly to how we generate models

Researched answer:
- rails g model ModelName attribute:datatye - this creates a Model with the necessary attributes (columns and data types)
- rails g controller ControllerName - this creates all the files with the particular controller such as a controller file where we would pass in methods and logic for the app, a folder in views where we would have our erb views files to display the app functionality, a helper file that we generally don't need, and a stylesheet file. 
- rails g resource Name attribute:datatype - this is very similar to how we type out the model command but the resource command will create a model with the necessary columns and data types, a controller, the view folder, and the necessary RESTful routes. This is like a combination of the model and controller command plus the RESTful routes. 


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
- index: this shows all of the instances of students on a single page

action: "POST" location: /students
- create: this allows the functionality of the new form to work and create a new instance

action: "GET" location: /students/new
- new: this displays a new form in order to us to be able to create a new instance

action: "GET" location: /students/2
- show: this would show a specific instance of students when passed in the id params

action: "GET" location: /students/2/edit
- edit: this displays an edit form to be able to edit this specific instance

action: "PATCH" location: /students/2
- update: this would allow the functionality of the edit form to work and update this specific instance.

action: "DELETE" location: /students/2
- destroy: this would remove the specific instance of the students


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
    1. As a user, I need to see an existing app in order to know that app exists
    2. As a user, I need to see a list of all the instances available in order to interact with the application
    3. As a user, I need to be able to see the details of a specfic instance in order to interact with the application
    4. As a user, I need to see a form in order to fill out information for a new instance
    5. As a user, I need this form to work in order to create a new instance
    6. As a user, I need to see an edit form in order to edit an existing instance
    7. As a user, I need this edit form to work in order to update this specific instance
    8. As a user, I need to be able to delete an existing instance in order to interaction with the application
    9. As a developer, I need to ensure only valid data is entered into the database in order to create a secure application
    10. As a user, I need to see styling in order to have a good time with the application
