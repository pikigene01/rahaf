<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function roles()
    {
        return $this->hasMany(UserRole::class);
    }

    //create function check if user is admin
    public function isAdmin()
    {
        if(!empty($this->roles->first()->role->role)){

            return $this->roles->first()->role->role == 'ADMIN';

        }else{
            return false;

        }
    }

    //create function check if user has role
    public function hasRole($role)
    {
        if(!empty($this->roles->first()->role->role)){
            return $this->roles->first()->role->role == $role;

        }else{
            return false;

        }
    }

    //create function toget all admin users
    public function scopeAdmins($query)
    {
        return $query->whereHas('roles', function ($query) {
            $query->whereHas('role', function ($query) {
                $query->where('role', 'ADMIN');
            });
        });
    }

    public function eventBooks()
    {
        return $this->hasMany(EventBook::class)->orderBy('created_at', 'DESC');
    }
    public function venueFavourites()
    {
        return $this->hasMany(UserEventFavourite::class)->orderBy('created_at', 'DESC');
    }
}
