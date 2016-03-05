export default Ember.Route.extend({
  model() {
    return [
      {
        value: 6.5, label: "JavaScript",
        children: [
          {value: 6.5, label: "jQuery"},
          {value: 2.0, label: "Node.js"},
          {value: 2.0, label: "Ember"},
          {value: 1.5, label: "React + Flux"},
          {value: 1.5, label: "Backbone"},
          {value: 0.5, label: "Angular JS"},
        ]
      },
      {
        value: 6.5,
        label: "CSS",
        children: [
          {value: 3.5, label: "SCSS"},
          {value: 6.5, label: "CSS"},
          {value: 2.0, label: "Bootstrap"},
        ]
      },
      { value: 6.5, label: "HTML"},
      {
        value: 5.0, label: "PHP",
        children: [
          {value: 2.0, label: "Symfony 2"},
          {value: 3.0, label: "Custom FW"},
          {value: 1.0, label: "Zend"},
        ]
      },
      {
        value: 1.5, label: "Java",
        children: [
          {value: 1.5, label: "Spring MVC"},
          {value: 1.5, label: "JSP"},
          {value: 1.5, label: "Maven 3"},
        ]
      },
    ];
  }
});
