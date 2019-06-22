//This function takes all of NBC's colors and randomly selects one for the top border of each card component

export default (colorStyle = function() {
  let colors = [
    "#FCB711",
    "#F37021",
    "#CC004C",
    "#6460AA",
    "#0089D0",
    "#0DB14B"
  ]; //Create an array of the colors
  let color = colors[Math.floor(Math.random() * 6)]; //Randomly select one color
  return {
    borderTopColor: color,
    borderTopWidth: 10
  }; //Create a style containing that color
});
