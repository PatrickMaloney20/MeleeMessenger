using MeleeMessenger.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeleeMessenger.Hubs.Clients
{
    public interface IMeleeMessengerClient
    {
        Task RecieveMessage(Message message);
    }
}
