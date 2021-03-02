import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { Note } from '../interfaces/note';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public note: Note;

  constructor(private route: ActivatedRoute, public noteService: NotesService, private navCtrl: NavController) { 

    //Initialized a placeholder note

    this.note = {

      id: ' ',
      title: ' ',
      content: ' ' 
    };
  }

  ngOnInit() {
    let noteId = this.route.snapshot.paramMap.get('id');


    if(this.noteService.loaded){
      this.note = this.noteService.getNote(noteId)
     } else{
          this.noteService.load().then(()=> {

            this.note=this.noteService.getNote(noteId)
          });
      }
    
    }

    noteChanged(){
      this.noteService.save();
    }

    deleteNote(){
      this.noteService.deleteNote(this.note);
      this.navCtrl.navigateBack('/notes');
    }
}
