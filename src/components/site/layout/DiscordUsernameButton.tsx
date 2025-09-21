import { toast } from 'sonner'
import MaterialCloseSharp from '~icons/material-symbols/close-sharp'
import MaterialContentCopySharp from '~icons/material-symbols/content-copy-sharp'
import MaterialInfoSharp from '~icons/material-symbols/info-sharp'
import LogosDiscord from '@/components/icons/discord.svg?react'

function DiscordUsernameButton() {
  const handleCopy = () => {
    navigator.clipboard.writeText('luisfuturist')
    toast.custom(t => (
      <div className="aug-button-2 flex items-center gap-1 p-4" data-augmented-ui="tr-clip bl-clip both">
        <MaterialInfoSharp className="w-6 h-6" />
        <h1>Copied to clipboard</h1>
        <button type="button" onClick={() => toast.dismiss(t)} className="hover:text-link-primary-hover cursor-pointer">
          <MaterialCloseSharp className="w-6 h-6" />
        </button>
      </div>
    ))
  }

  return (
    <button type="button" className="flex items-center gap-1 text-xl text-foreground hover:text-link-primary-hover cursor-pointer" onClick={handleCopy}>
      <LogosDiscord className="w-6 h-6 fill-current mr-1" />
      @luisfuturist
      <MaterialContentCopySharp className="w-6 h-6" />
    </button>
  )
}

export default DiscordUsernameButton
