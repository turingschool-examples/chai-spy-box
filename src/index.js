import './css/base.scss';
import $ from 'jquery';

import Square from './Square';

$("document").ready(function(){

  $('#new-box-btn').on('click', function(){
    let $boxes = $('.dog-box');
    if ($boxes.length === 1) {
      alert('Too many boxes');
      return;
    }

    const newSquare = new Square();

    $('section').append(`
      <article class="dog-box" data-id=${newSquare.id}>
        <h1>This is a ${newSquare.length} by ${newSquare.width} square</h1>
        <button class="dog-btn">Get dog</button>
        <button class="stats-btn">Get stats</button>
      </article>
      `)
  });

  $('section').on('click', '.dog-btn', function() {
    let $thisBox = $(this).closest('.dog-box');
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      let link = data.message;
      $thisBox.css("background-image", `url(${link})`)
      $thisBox.css("background-repeat", `no-repeat`)
      $thisBox.css("background-size", `auto`)
    })
  });

  $('section').on('click', '.stats-btn', function() {
    let currentSquare = new Square($(this).closest('.fox-box').data('id'));
    let statistics = currentSquare.getStats();
    let statisticsExplanation = `This box has an area of ${statistics.area}, a perimeter of ${statistics.perimeter}, and a diagonal length of ${statistics.diagonalLength}`
    alert(statisticsExplanation);
  });


})
