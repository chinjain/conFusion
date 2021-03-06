import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private dishService: DishService
    , private promService: PromotionService) { }

  dish: Dish;
  promotion: Promotion
  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promService.getFeaturedPromotion();
  }

}
