<?php

namespace Acme\KibanaDashboard;

use Laravel\Nova\Card;

class KibanaDashboard extends Card
{
    /**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = 'full';

    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'kibana-dashboard';
    }

    /**
     * Indicates that the analytics should show current visitors.
     *
     * @return $this
     */
    public function withURL(string $url)
    {
        return $this->withMeta(['url' => $url]);
    }
}
