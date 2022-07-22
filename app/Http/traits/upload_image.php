<?php


namespace App\Http\traits;


trait upload_image
{
    public function upload($file,$folder_name,$type = 'one'){
        $valid_extensions = ['png','jpg','jpeg','gif'];
        if($type == 'one') {
            if (in_array($file->getClientOriginalExtension(), $valid_extensions)) {
                $name = time() . '_user.' . $file->getClientOriginalExtension();
                $file->move(public_path('images/' . $folder_name), $name);
                return $name;
            } else {
                return false;
            }
        }
    }
}
