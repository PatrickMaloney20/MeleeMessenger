using MeleeMessenger.Hubs;
using MeleeMessenger.Hubs.Clients;
using MeleeMessenger.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeleeMessenger.Controllers
{
    [Route("[controller]")]
    public class MeleeMessengerController : ControllerBase
    {
        private readonly MeleeMessengerContext _context;
        private readonly IHubContext<MeleeMessengerHub, IMeleeMessengerClient> _messengerContext;

        public MeleeMessengerController(MeleeMessengerContext context, IHubContext<MeleeMessengerHub, IMeleeMessengerClient> messengerContext)
        {
            _context = context;
            _messengerContext = messengerContext;
        }

        [HttpGet("messages")]
        public IEnumerable<Message> GetMessages()
        {
            var result = _context.Messages.ToList();
            return result;
        }

        [HttpDelete("messages/{id}")]
        public IActionResult DeleteMessage(int id)
        {
            var MessageToDelete = _context.Messages.FirstOrDefault(Message => Message.Id == id);
            if (MessageToDelete != null)
            {
                _context.Messages.Remove(MessageToDelete);
                _context.SaveChanges();
                return NoContent();
            }
            return NotFound();
        }

        [HttpPost("messages")]
        public IActionResult PostMessage([FromBody] Message message)
        {
            _context.Messages.Add(message);
            _context.SaveChanges();
            _messengerContext.Clients.All.RecieveMessage(message);
            return NoContent();
        }
    }
}
