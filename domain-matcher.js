

(function(hostname) {
  var surveyDomains = [
    {
      domain: "test",
      pageId: "1779324532358727",
      appId: "1545696248815651"
    },
    {
      domain: "cora",
      pageId: "230735820663838",
      appId: "1786837724976760"
    },
    {
      domain: "corasupport",
      pageId: "213240242752666",
      appId: "2019109918335963"
    },
    {
      domain: "corarecovery",
      pageId: "571518003199365",
      appId: "561327627572533"
    },
    {
      domain: "coraassist",
      pageId: "1710456155642086",
      appId: "348743462279012"
    },
    {
      domain: "coracare",
      pageId: "1676197405756380",
      appId: "164299467624310"
    },
    {
      domain: "coracommunity",
      pageId: "1458997827560343",
      appId: "2135345230029387"
    }
  ];

  var production = hostname.match(/cora.chat/);
  var instance;

  if (!production) {
    return surveyDomains[0];
  } else {
    for (var i = 0; i < surveyDomains.length; i++) {
      var regex = new RegExp(hostname.split(".")[0]);
      if (surveyDomains[i].domain.match(regex)) {
        instance = surveyDomains[i];
      }
    }
  }
  return instance;
}(window.location.hostname));
