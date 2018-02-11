/**
 * Enter all sides of the triangle
 */
var side_a = parseFloat(prompt('Enter the side a', 1));
var side_b = parseFloat(prompt('Enter the side b', 2));
var side_c = parseFloat(prompt('Enter the side c', 3));

var type_triangle = '';

var perimeter = 0;
var square = 0;

/**
 * Determine whether there is a triangle
 */
if(side_a<=side_b+side_c && side_b<=side_a+side_c && side_c<=side_b+side_a) {

  /**
   * Determine type of triangle
   */
  if(Math.pow(side_a, 2) == (Math.pow(side_b, 2) + Math.pow(side_c, 2))
    ||Math.pow(side_b, 2) == (Math.pow(side_a, 2) + Math.pow(side_c, 2))
    ||Math.pow(side_c, 2) == (Math.pow(side_a, 2) + Math.pow(side_b, 2))) {
    type_triangle = 'right triangle';
  } else if(side_a==side_b && side_b==side_c && side_c==side_a) {
    type_triangle = 'equilateral';
  } else if(side_a==side_b || side_b==side_c || side_c==side_a) {
    type_triangle = 'isosceles';
  } else {
    type_triangle = 'scalene';
  }

  /**
   *  Square of triangle
   *  - first spet we calculate the perimeter
   *  - second square of triangle
   */
   perimeter = (side_a+side_b+side_c)/2;
   square = Math.sqrt(perimeter*(perimeter-side_a)*(perimeter-side_b)*(perimeter-side_c));

   console.log('Type of triangle is ' + type_triangle + ' and square is ' + Math.trunc(square * 100) / 100);

} else {
  console.log('Incorrect data');
}
