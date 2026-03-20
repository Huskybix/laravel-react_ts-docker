<?php

namespace App\Enums;

enum UserRole: int
{
    case User = 1;
    case Moderator = 2;
    case Admin = 3;
}