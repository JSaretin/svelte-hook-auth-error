First, great job by the Svelte community, I have been using it for all my projects right from the day, I learned about it.

But I have been dealing with this problem, even in my previous project, I had to rewrite my auth logic at the last moment right before launching.

I don't want to do that with my current project because my previous project was just a single dashboard page, so I could just move the logic to the shadow endpoint of my page.

But this project contains many pages like Setting, Profile, and more.

In my login endpoint, I create and save a new cookie to the user browser, so I can use that to evaluate when they reload or try to visit some routes, in this case when they visit the login page, I check if there is a cookie named `access_token` and then redirect them to their dashboard, else, proceed with the user request, same logic if they visit the dashboard and the is no `access_token` 

The issue is that everything is working as it should in development, but when I build and upload to    [netlify](https://netlify.com) it starts acting weird, if you visit the dashboard when there's a cookie, the whole page is stuck. What is think is happing, is that somehow, the hook is not recognizing that there's a cookie, but when it redirects to the login, it recognizes there's a cookie and redirects to the dashboard, and the loop continues.

## How to reproduce Error

`
git clone https://github.com/
cd svelte-auth-error
npm install

npm run build
npm run preview
`

then login and visit the user dashboard