var jsonData = pm.response.json();

jsonData.data.forEach(function(item) {
    var email = item.email;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
    pm.test("Email " + email + " is valid");
  } else {
    pm.test("Email " + email + " is invalid", false); 
  }
});
