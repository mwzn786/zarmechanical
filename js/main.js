(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");

  if (toggle && header && nav) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && header && header.classList.contains("is-open")) {
      header.classList.remove("is-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    }
  });

  var form = document.querySelector("#estimate-form");
  if (!form) return;

  var status = form.querySelector(".form-status");

  function setInvalid(field, invalid) {
    field.classList.toggle("is-invalid", invalid);
    field.setAttribute("aria-invalid", invalid ? "true" : "false");
  }

  function showStatus(message, isError) {
    if (!status) return;
    status.textContent = message;
    status.classList.add("is-visible");
    status.classList.toggle("is-error", Boolean(isError));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = form.elements.namedItem("name");
    var email = form.elements.namedItem("email");
    var phone = form.elements.namedItem("phone");
    var projectType = form.elements.namedItem("projectType");
    var message = form.elements.namedItem("message");

    var fields = [name, email, phone, projectType, message];
    var valid = true;

    fields.forEach(function (field) {
      var empty = !field.value.trim();
      setInvalid(field, empty);
      if (empty) valid = false;
    });

    if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      setInvalid(email, true);
      valid = false;
    }

    if (!valid) {
      showStatus("Please complete all required fields before sending your request.", true);
      var firstInvalid = form.querySelector(".is-invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var subject = "Estimate request from " + name.value.trim();
    var body = [
      "Name: " + name.value.trim(),
      "Email: " + email.value.trim(),
      "Phone: " + phone.value.trim(),
      "Project type: " + projectType.value.trim(),
      "",
      "Message:",
      message.value.trim()
    ].join("\r\n");

    var mailto =
      "mailto:estimate@zarmechanical.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    showStatus("Opening your email app to send this request to estimate@zarmechanical.com…", false);
    window.location.href = mailto;
  });
})();
