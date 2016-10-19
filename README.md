### This is a Ionic 2 APP made troughout my internship in the prefecture of Fès-Mèknes ##

Follow these instruction to deploy this example:

1. git clone https://github.com/karimessouabni/DsicApp.git
2. cd DsicApp
3. ionic platform add android
4. npm install
5. ionic serve -l -c -s -> To see if everything is working as it should
6. ionic run android -l -c -s 



Preview : 
![alt tag](http://farm9.staticflickr.com/8277/30130058730_b38be8dbe3_b.jpg)

 
![alt tag](http://farm9.staticflickr.com/8418/29796203194_fed95a26e0_b.jpg)



The development of this mobile application was based on Angular 2 which employs an MV* Architectural pattern. Like the web application’s MVC architecture, used and discussed before, the MV* separates the view from the logic and makes the code better structured and easily reused and tested.

For each page on the application we’ve developed a model a view and if needed a set of controllers, services and providers. So, the M stands for Model, V for View and the star for (controllers, services and providers).

**The Model:**
A TypeScript class containing fields, constructor (which is called once the specific page is
opened) and methods to describe the behavior of the application. The model can also import
services and providers e.g.: Ionic tools and directives.

**The View:**
Is the combination of the HTML and the Scss file (used to add style). The view gets updated
through data two-way binding: When data in the model changes, the view reflects the change,
and when data in the view changes, the model is updated as well. This happens immediately
and automatically, which makes sure that the model and the view are updated at all times.
**Services and Providers:**
Several Services and Providers were used:
	1.Some were imported directly from ionic and Angular resources, like:
		- NavController: to control data while navigating between the app’s pages;
		- Http: to make http request.
	
    2.And others were developed. For example, we have:

		Services making a connection with the web application Controllers, which
		retrieve data from the web application Model and give it back to the mobile application Model 		  through Services. The Views are then updated using data two-way binding;
		Form validator: Making sure the syntax is correct while filling a form on the application.
