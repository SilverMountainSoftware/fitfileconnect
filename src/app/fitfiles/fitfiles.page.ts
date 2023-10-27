import { getStorage, ref, uploadBytes } from "firebase/storage";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-fitfiles",
  templateUrl: "./fitfiles.page.html",
  styleUrls: ["./fitfiles.page.scss"],
})
export class FitfilesPage implements OnInit {
  // Single File Upload
  private file: File;

  constructor(private http: HttpClient) {
    console.log("Entering FitfilesPage constructor");
  }

  // Single File Upload
  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }

  async submitForm() {
    let formData = new FormData();
    formData.append("fit", this.file, this.file.name);

    // Create a root reference
    const storage = getStorage();
    // Create a reference to 'mountains.jpg'
    const storageRef = ref(storage, this.file.name);

    uploadBytes(storageRef, this.file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    
    console.log('Exiting submit form!');
  }

  ngOnInit() {}
}
