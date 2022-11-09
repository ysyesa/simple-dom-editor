window.addEventListener('load', () => {
  main();
});

function main() {
  comm_viewInitNavbar();
  if (window.location.href == "https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=1") {
    comm_viewInitDeveloperListingTab1();
  } else if (window.location.href == "https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=2") {
    comm_viewInitDeveloperListingTab2();
  } else if (window.location.href == "https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=3") {
    comm_viewInitDeveloperListingTab3();
  } else if (window.location.href == "https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=2&offer=true") {
    comm_viewInitDeveloperListingTab2MakeOffer();
  } else if (window.location.href == "https://agentnet.propertyguru.com.sg/featured-agent-booking?tab=3&completed=true") {
    comm_viewInitDeveloperListingTab3Completed();
  }
}
