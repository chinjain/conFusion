import { Component, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../shared/dish';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
   dish: Dish;


  constructor(private dishService : DishService,
    private location : Location,
    private route : ActivatedRoute  
    ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    this.dish = this.dishService.getDishById(id);
  }

  goBack():void{
    this.location.back();
  }

}
