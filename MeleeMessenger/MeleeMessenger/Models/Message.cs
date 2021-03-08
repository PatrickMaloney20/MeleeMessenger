using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace MeleeMessenger.Models
{
    public partial class Message
    {
        public string From { get; set; }
        public string Content { get; set; }
        [Key]
        public int Id { get; set; }
    }
}
