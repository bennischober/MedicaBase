import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private messageSource = new BehaviorSubject<string>('Übersicht');
  currentMessage = this.messageSource.asObservable();

  private userMessageSource = new BehaviorSubject<number>(0);
  currentUserMessage = this.userMessageSource.asObservable();

  private recipeEditMessageSource = new BehaviorSubject<number>(0);
  currentRecipeEditMessage = this.recipeEditMessageSource.asObservable();

  private userRecipeMessageSource = new BehaviorSubject<number>(0);
  currentUserRecipeMessage = this.userRecipeMessageSource.asObservable();

  private deleteUserMessageSource = new BehaviorSubject<number>(0);
  currentDeleteUserMessage = this.deleteUserMessageSource.asObservable();

  private deleteRecipeMessageSource = new BehaviorSubject<number>(0);
  currentDeleteRecipeMessage = this.deleteRecipeMessageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeUserMessage(userMessage: number) {
    this.userMessageSource.next(userMessage);
  }

  changeRecipeMessage(recipeMessage: number) {
    this.recipeEditMessageSource.next(recipeMessage);
  }

  changeUserRecipeMessage(userRecipeMessage: number) {
    this.userRecipeMessageSource.next(userRecipeMessage);
  }

  changeDeleteUserMessage(deleteUserMessage: number) {
    this.deleteUserMessageSource.next(deleteUserMessage);
  }

  changeDeleteRecipeMessage(deleteRecipeMessage: number) {
    this.deleteRecipeMessageSource.next(deleteRecipeMessage);
  }
}
