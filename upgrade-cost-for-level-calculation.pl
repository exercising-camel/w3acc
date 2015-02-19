use strict;
use warnings FATAL => 'all';
use v5.14;
use Data::Dump;

my $upg = {
    gold_base        => 100,
    gold_increment   => 75,
    lumber_base      => 50,
    lumber_increment => 125,
    levels           => 3,
};

sub cost_for_level { my ($level) = @_;
    return {
        gold   => $upg->{'gold_base'}
               + ($level - 1) * $upg->{'gold_increment'},
        lumber => $upg->{'lumber_base'}
               + ($level - 1) * $upg->{'lumber_increment'},
    };
}

sub total_cost_for_level { my ($level) = @_;
    my $cost_for_level = [
        { gold => 0, lumber => 0 },
        map {
            cost_for_level($_),
        } 1 .. 3
    ];
    # dd $cost_for_level;

    my $res = { gold => 0, lumber => 0 };
    for my $current_level (1 .. $level) {
        $res->{'gold'} += $cost_for_level->[$current_level]{'gold'};
        $res->{'lumber'} += $cost_for_level->[$current_level]{'lumber'};
    }

    return $res;
}

dd 1, total_cost_for_level(1);
dd 2, total_cost_for_level(2);
dd 3, total_cost_for_level(3);