<?php

use Illuminate\Database\Seeder;
use App\Projects;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $coverCunt = json_encode(
            array(
                "cover" => "/image/covercunt.jpg",
                "img1"  => "/image/covercunt.jpg",
                "img2"  => "/image/cuntcover.jpg",
                "img3"  => "/image/cunt15.jpg",
                "img4"  => "/image/cunt13.jpg",
                "img5"  => "/image/cunt18.jpg",
                "img6"  => "/image/cunt20.jpg",
                "img7"  => "/image/cunt27.jpg",
                "img8"  => "/image/cunt32.jpg",
                "img9"  => "/image/cunt35.jpg"
            )
        );
        Projects::create([
            'title' => "Let's Talk About The C-Word",
            'description' => "In this book, I dive into the history of one of the most offensive words in the English language, the word cunt. Detailing the complex history and evolution of the word, The book also includes an interview with Rachel Miles a Senior Lecturer in Visual Culture at UWE, where we have an in-depth conversation on the role of the word in modern culture and how it has come to have so much power.",
            'type' => "Editorial Design, Research & Custom Bookbinding",
            'details' => "The rose was laser cut into the front cover and the spine of the book is made with sandpaper to give the book a rough texture as soon as you pick it up.",
            'img' =>  $coverCunt,
        ]);



        $velvet = json_encode(
            array(
                "cover"=> "/image/DSCF0251.jpg",
                "img1"=> "/image/DSCF0251.jpg",
                "img2"=> "/image/DSCF0211.jpg",
                "img3"=> "/image/DSCF0460.jpg",
                "img4"=> "/image/DSCF0868.jpg",
                "img5"=> "/image/DSCF0542.jpg", 
                "img6"=> "/image/DSCF0550.jpg",
                "img7"=> "/image/DSCF0836.jpg",
                "img8"=> "/image/DSCF0413.jpg",
                "img9"=> "/image/DSCF0765.jpg"  

            )
        );
        Projects::create([
            'title' => "Velvet",
            'description' => "Velvet is a collaborative design practice aimed to help engage people in a creative lifestyle, we make limited items all of which are handcrafted in the South of Spain. \n\n Working side by side with different creatives and local businesses, we strive to inspire a more ethical & sustainable choice in the creative industry. \n\n Already encouraging creative collaborations between different artists, we aim to encompass an array of elements within a creative lifestyle, ranging from bespoke clothing to experimental art books, furniture, and more.",
            'type' => "Art Direction & Fashion Design",
            'details' => "",
            'img' => $velvet
        ]);



        $sync = json_encode(
            array(
                "cover" => "/image/sync2.jpg",
                "img1"  => "/image/sync2.jpg"
            )
        );
        Projects::create([
            'title' => "Sync",
            'description' => "A sculpture representing a visual analysis of human synchronization through rhythm in a confined space. The sculpture consists of a pattern created by people's movements in response to the sounds they hear. The pattern is divided into specific time frames that have each been screen printed on layers of perspex, as the rhythm progresses you can see the fluctuations of synchronized movements move through the crowd. The layers are then held together by two concrete blocks that emulate the walls of this confined space.",
            'type' => "Conceptual Sculpture Design using mixed media.",
            'details' => "",
            'img' => $sync,
        ]);



        $finalFlamingo = json_encode(
            array(
                "cover" => "/image/Final_flamingo_cover.jpg",
                "img1"  => "/image/Final_flamingo_cover.jpg",
                "img2"  => "/image/Final_flamingo_the_fucking_final_one4.jpg",
                "img3"  => "/image/Final_flamingo_the_fucking_final_one10.jpg",
                "img4"  => "/image/Final_flamingo_the_fucking_final_one14.jpg",
                "img5"  => "/image/Final_flamingo_the_fucking_final_one16.jpg",
                "img6"  => "/image/Final_flamingo_the_fucking_final_one19.jpg",
            )
        );
        Projects::create([
            'title' => "Fluttering Flamingo",
            'description' => "A publication analysing the flamingos flight patterns and yearly migration. This is a fascinating moment in nature as these birds are capable of migrating miles, at the exact date every year, from all over the world to lake Nakuru.",
            'type' => "Editorial Design & Custom Bookbinding",
            'details' => "The publication also features fold-out pages showing the bird's flight formations. These pages are designed to mimic the flamingo's wingspan.",
            'img' => $finalFlamingo,
        ]);



        $synchronicity = json_encode(
            array(
                "cover" => "/image/syncvid.jpg",
                "img1"  => "/image/syncvid.jpg",
                "video" => "https://vimeo.com/300053745"
            )
        );
        Projects::create([
            'title' => "Synchronicity",
            'description' => "A moving image piece on Carl Jung’s theory of Synchronicity. \n Many of my projects stem from his research on this subject. There is still so much we don't know when it comes to the subconscious connections humans have with each other and this fascinates me. Small details in movements and behavior that sometimes go unnoticed can often stem from a deep and complex process in our subconscious.",
            'type' => "Moving Image & Sound Design",
            'details' => "",
            'img' => $synchronicity,
        ]);



        $laraLogan = json_encode(
            array(
                "cover" => "/image/laracover.jpg",
                "img1"  => "/image/laracover.jpg",
                "img2"  => "/image/LARA8.jpg",
                "img3"  => "/image/LARA9.jpg",
                "img4"  => "/image/LARA10.jpg",
                "img5"  => "/image/LARA11.jpg",
                // "img6"  => ""
            )
        );
        Projects::create([
            'title' => "The Lara Logan Case",
            'description' => "On Feb. 11, 2011 the journalist Lara Logan had suffered a brutal sexual assault by Egyptian men in the middle of hundreds of people during the anti-Mubarak celebration in the Tahrir Square. The blame for what had happened has been thrown at many different groups, but this publication takes a look at the situation from many different angles, analyzing mob mentality and previous reference groups to try and understand why the mob of 200 men began this public attack.",
            'type' => "Editorial Design",
            'details' => "Writing by Elaine Replogle",
            'img' => $laraLogan,
        ]);



        $darkElf = json_encode(
            array(
                "cover" => "/image/ira.jpg",
                "img1"  => "/image/ira.jpg"
            )
        );
        Projects::create([
            'title' => "The Dark Elf",
            'description' => "Photography colaboration with makeup artist Ira Kamu.",
            'type' => "",
            'details' => "Photography.",
            'img' => $darkElf,
        ]);

        $humanHerd = json_encode(
            array(
                "cover"=> "/image/herd_front_cover.jpg",
                "img1" => "/image/herd_front_cover.jpg",
                "img2" => "/image/herd8.jpg",
                "img3" => "/image/herd_red_1.jpg",
                "img4" => "/image/herd15.jpg",
                "img5" => "/image/herd20.jpg",
                "img6" => "/image/herd_red.jpg",
                "img7"=> "/image/herd_red_2.jpg"
            )
        );
        Projects::create([
            'title' => "Human Herd Mentality",
            'description' => "A publication exploring herd mentality within humans. Analyzing certain situations where people, once becoming part of a large group,  lose their individuality and their power to reason for themselves. These situations result in an individual's behavior becoming out of the ordinary.",
            'type' => "Editorial Design",
            'details' => "",
            'img' =>  $humanHerd,
        ]);
    }
}