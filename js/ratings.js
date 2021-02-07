
function collect_ratings() {
    var ratings = {
    count: 0,
    sum: 0,
    average: 0
  }

   let rating = 0;

   const ELEMENTS = document.querySelectorAll(".rating");

   ELEMENTS.forEach(element => {
     rating = parseInt(element.id.replace("star", ""));
     ratings.count += parseInt(element.value);
     rating.sum += parseInt(element.value) * rating;
   });

   if (ratings.count !== 0) {
     ratings.average = ratings.sum / ratings.count;
   }

   return ratings;
}

document.addEventListener("change", () => {
  conts RATINGS = collect_ratings();
  document.querySelector("#average").value = ratings.average.toFixed(2);
})
