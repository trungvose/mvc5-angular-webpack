import { Component } from "@angular/core";

@Component({
  selector: "my-angular-app",
  template: `
  <div class="jumbotron">        
    <div class="text-center">
      <a href="http://trungk18.github.io/" target="_blank">
        <img alt="trungk18" class="trungk18" src="https://github.com/trungk18/trungk18.github.io/raw/master/img/trungk18.png" style="max-width: 80px;">
      </a>
      <h2>{{description}}</h2>
    </div>    
    <div>Tutorial by <a href="http://trungk18.github.io/">trungk18</a></div>
    <div>Source code: <a href="https://github.com/trungk18/mvc5-angular-webpack">Github</a></div>
    <div>Answer on <a href="https://stackoverflow.com/a/47918737/3375906">StackOverFlow</a></div>
  </div>`
})
export class AppComponent {
  description = "Integrate Angular + Webpack into a ASP.NET MVC 5 application";
}
