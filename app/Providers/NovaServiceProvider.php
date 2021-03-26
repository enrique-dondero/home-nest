<?php

namespace App\Providers;

use Acme\Profile\Profile;
use App\Nova\AdminUser;
use App\Nova\Business;
use App\Nova\Category;
use App\Nova\OwnershipRequest;
use App\Nova\Role;
use App\Nova\PublicUser;
use Laravel\Nova\Nova;
use Laravel\Nova\Cards\Help;
use App\Nova\Metrics\TotalBusiness;
use App\Nova\Metrics\TotalReviews;
use App\Nova\Metrics\TotalReviewImages;
use Illuminate\Support\Facades\Gate;
use Laravel\Nova\NovaApplicationServiceProvider;
use Acme\Report\Report;
use Acme\KibanaDashboard\KibanaDashboard;

class NovaServiceProvider extends NovaApplicationServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
        Nova::style('admin', public_path('css/custom.css'));
    }

    /**
     * Register the Nova routes.
     *
     * @return void
     */
    protected function routes()
    {
        Nova::routes()
                ->withAuthenticationRoutes()
                ->withPasswordResetRoutes()
                ->register();
    }

    /**
     * Register the Nova gate.
     *
     * This gate determines who can access Nova in non-local environments.
     *
     * @return void
     */
    protected function gate()
    {
        Gate::define('viewNova', function ($user) {
            return $user->hasRole('admin');
        });
    }

    /**
     * Get the cards that should be displayed on the Nova dashboard.
     *
     * @return array
     */
    protected function cards()
    {
        return [
            //new Help,
            //(new TotalBusiness)->width('1/3'),
            //(new TotalReviews)->width('1/3'),
            //(new TotalReviewImages)->width('1/3'),
            (new KibanaDashboard())->withURL(env('KIBANA_DASHBOARD', '//localhost:5601/app/kibana')),
        ];
    }

    /**
     * Get the tools that should be listed in the Nova sidebar.
     *
     * @return array
     */
    public function tools()
    {
        return [
            new Profile,
            new Report,
        ];
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    public function resources()
    {
        Nova::resources([
            Business::class,
            Category::class,
            Role::class,
            PublicUser::class,
            AdminUser::class,
            OwnershipRequest::class
        ]);
    }
}
