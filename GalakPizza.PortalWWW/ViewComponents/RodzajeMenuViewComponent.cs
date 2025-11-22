using Microsoft.AspNetCore.Mvc;

namespace GalakPizza.PortalWWW.ViewComponents
{
    public class RodzajeMenuViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            // Na razie hardcoded kategorie
            // Później pobierzemy z bazy danych
            var kategorie = new List<KategoriaModel>
            {
                new KategoriaModel
                {
                    Id = 1,
                    Nazwa = "Klasyczne Ziemskie",
                    Ikona = "public",
                    Opis = "Tradycyjne receptury z planety Ziemia"
                },
                new KategoriaModel
                {
                    Id = 2,
                    Nazwa = "Galaktyczne Specjały",
                    Ikona = "rocket_launch",
                    Opis = "Kosmiczne kompozycje Kapitana"
                },
                new KategoriaModel
                {
                    Id = 3,
                    Nazwa = "Ostre jak Laser",
                    Ikona = "whatshot",
                    Opis = "Dla odważnych podróżników"
                },
                new KategoriaModel
                {
                    Id = 4,
                    Nazwa = "Wegetariańskie UFO",
                    Ikona = "eco",
                    Opis = "Zielone pizze z całej galaktyki"
                }
            };

            return View(kategorie);
        }
    }

    // Tymczasowy model - później przeniesiemy do GalakPizza.Data
    public class KategoriaModel
    {
        public int Id { get; set; }
        public string Nazwa { get; set; }
        public string Ikona { get; set; }
        public string Opis { get; set; }
    }
}