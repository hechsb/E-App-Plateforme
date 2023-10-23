import { Component } from '@angular/core';
import { Class } from '../../class'
import { ClassService } from '../../../Services/class.service'
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchQuery = ''

  classes: Class[] = []

  filteredClasses: Class[] = [];
  showMe : boolean =false
  className :string =""

  constructor(private classService: ClassService ,private router :Router,private route: ActivatedRoute) {
  
  }

  getClasses(): void {
    this.classService.getEnrolledClasses()
      .subscribe(classes => {
        this.classes = classes;
        this.filteredClasses = classes
      })
  }

  updateFilter() {
    console.log(this.searchQuery)
    this.filteredClasses = this.classes.filter(filtered =>
      filtered.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

  }

  ngOnInit(): void {
    this.getClasses()
  }

  openModel(){
    this.showMe=!this.showMe
  }

  handleJoin(){
    // console.log("oyy you entred ",this.className)
    let count =0
      let chat =null 
    for (const chatRoomName of this.filteredClasses) {
       if(chatRoomName.name === this.className){
        console.log("hahahaha")
       
        chat = chatRoomName
        count ++
       }
    }
    console.log(chat)
    if (count === 1 && (chat)) {
      this.router.navigate(['Room-Channel', chat.id]);
  }
}

}
