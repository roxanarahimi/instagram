<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SaveWebPageTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     */
    public function index()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('http://localhost:8001')
                ->driver->manage()->window()->maximize();
        });

//        $this->browse(function (Browser $browser) {
//            // Open the webpage you want to save
//            $browser->visit('https://webagent.ir')
//
//                // Save a screenshot of the page
//                ->screenshot('example-page');
//
//            // Get the page source (HTML content)
//            $html = $browser->driver->getPageSource();
//
//            // Save the page source as an HTML file
//            file_put_contents(base_path('tests/Browser/screenshots/example-page.html'), $html);
//        });
    }
}
