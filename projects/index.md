---
layout: default

title: Projects | Hashes_JMI
---
<section id="projects">
        <div class="user-details">
  <h1> Featured Projects </h1>
</div>
{% assign position="right" %}
{% assign positionc="left" %}
{% for project in site.data.projects %}
  <div class="user-projects">
    <div class="images-{{position}}">
      <img alt="hackJMI" src="{{page.baseurl}}/assets/images/projects/{{project.image}}" />
    </div>
    <div class="contents-{{positionc}}">
      <h3> {{project.title}} </h3>
      <ul>
        <li>{{project.lang}}</li>
      </ul>
      <p>{{project.description}}</p>
      <a class="project-link" href="{{project.link}}">Check it out</a>
    </div>
  </div>
  {% if position=="right" %}
    {% assign position="left" %}
    {% assign positionc="right" %}
  {% elsif position=="left" %}
    {% assign position="right" %}
    {% assign positionc="left" %}
  {% endif %}
{% endfor %}
</section>
