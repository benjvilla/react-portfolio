# Portfolio Page

## Background

A **Personal Portfolio** is a web site that showcases your personal work.

It can serve as a resume that people can interact with to see examples of the work in question.

## Info

### The Portfolio Should Include

* Your full name
* Your Github username, with a link to your GitHub Repos page.
* Your public social media accounts, with links.
* Your LinkedIn account.
* Your current home city and state. **do not** list your street address or zip code.
* How to contact you.
  * Consider what information you want to be available when anyone searches for your name.
  * Email, phone, other.

## Goals

Understand and use the following:

  * React
  * React Router
  * Whitespace using margin and padding
  * Typography improvements
  * Text spacing
  * Color and contrast
  * Using images
  

## Stories

These stories are highly customizable. Subpages are described below, but do not feel you need to follow their construction or order specifically. We will be looking for the following _information_ to be present on your portfolio, but you may **present** it however fits your personality. 

The only things **required** are a persistent nav bar/menu and a persistent footer.

## Home Page

Should have:

* A profile image of you.
* A short description of who you are, for example:

> A passionate web developer looking to make a difference in the world.

* Links to the following sub-pages.
  * About Me
  * Projects or Portfolio
  * Hobbies and Interests
  * Work History
  * Contact Me Form

## About Me Page

* Build a page that includes basic details about your history as a person such as:
  * What interests you
  * Where you grew up
  * Why you got into programming

## Projects Page

* A list of all the repos on your personal github account
  * You can generate this using the [GitHub Rest API](https://developer.github.com/v3/repos/)
* Link to the completed or in progress project repositories for this bootcamp.
  * Use links to your github repositories and/or links to your deployed projects, possibly with cover screenshots.
  * Make sure the links are up to date!
* Add cover screenshots for each project.
  * Optionally add a separate page for each with a description of the objectives, your approach to solving the project, and anything else that you learned.
  * Optionally record a video showing your walk-through of the project program or application in use.

## Hobbies and Interests Page

* Hobbies
  * Do you play any instruments or play in a band?
  * Are you on a sports team like baseball, ultimate frisbee or softball?
  * Are you passionate about an outdoor sport such as skiing, rock climbing, mountain biking, kayaking or something else?
  * Do you volunteer at a local animal shelter, food shelf, or school board?

## Work History

* A web version of your resume with basic formatting. Make sure to include the following.
  * Your career goal(s).
  * Prior employers going back ten years.
  * Personal skills and experience.
    * e.g. HTML / CSS / JavaScript / Web Development / Git / Command Line

* Link to a downloadable version of your resume such as a PDF.

```html
<a href="/assets/my-resume.pdf" download>
  <img src="/images/my-resume-cover.jpg" alt="My Personal Resume Screenshot">
</a>
```

### Download File Example

* [Use the download attribute when linking to a downloadable file](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#Use_the_download_attribute_when_linking_to_a_download)

## Navigation Bar

This should *persist* across all other pages of your site.  

* Build a "Nav Bar" using a consistent UI on each page, with links to the various other pages of your portfolio.
* Style the navbar using Flexbox or CSS Grid.

### Example Navigation Elements

* Navigation <https://www.w3schools.com/css/css_navbar.asp>
* Drop Downs <https://www.w3schools.com/css/css_dropdowns.asp>
* Icon Navigation <https://www.w3schools.com/howto/howto_css_icon_bar.asp>
* Hamburger Menu Icon <https://www.w3schools.com/howto/howto_css_menu_icon.asp>
* Responsive Top Navigation <https://www.w3schools.com/howto/howto_js_topnav_responsive.asp>

## Page Footer

Add a *persistent* footer to your portfolio page which should include:
  * Contact Info
  * CopyWrite Info
  * Social Media Links
  * Basic links to other pages

### Footer Examples

* Sticky Footer Example <https://css-tricks.com/couple-takes-sticky-footer/>
* Basic Sticky Example <https://www.w3schools.com/howto/howto_css_fixed_footer.asp>

## Icebox

* Make the page mobile responsive. There are various styling libraries you can incorporate that would make this easier.
* Use a styling OR animation library to bring personality to your page. For this icebox, we will also accept using Sass.
* Host your site live on the internet. There are a number of options available to do so, but we would suggest checking out: Netlify, Vercel, and GitHub Pages.
