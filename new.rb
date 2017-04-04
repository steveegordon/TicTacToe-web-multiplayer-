class Vertebrate
  attr_reader :spine, :coldblood, :flies
   def has_spine?
         @@spine = true
end
end
class Reptilia<Vertebrate
  def cold_blooded?
    @coldblood = true
end
end
class Aves< Vertebrate
def can_fly?
   @flies = true
end
end



